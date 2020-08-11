import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { RectButton } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

import { SUBJECT_LIST, WEEK_DAYS } from '../../constants/formFilters'
import { useTeacherEffects } from '../../providers/teacherProvider';

import styles from './styles'

type Fields = 'subject' | 'week_day' | 'time'

interface FormProps {
  subject: string
  week_day: string
  time: Date | undefined
}

const INITIAL_FORM: FormProps = {
  subject: SUBJECT_LIST[4].value,
  week_day: WEEK_DAYS[1].value,
  time: undefined,
}

const Filter = () => {
  const [showSelectTime, setShowSelectTime] = React.useState(false)
  const [formFilter, setFormFilter] = React.useState<FormProps>(INITIAL_FORM)

  const { getTeachersFiltered } = useTeacherEffects()

  const handleFilter = (field: Fields, value: string) => {
    setFormFilter({
      ...formFilter,
      [field]: value
    })

    if (field === 'time') {
      setShowSelectTime(false)
    }
  }

  const handleChangeTime = (selectedDate: Date | undefined) => {
    setShowSelectTime(false)
    setFormFilter({ ...formFilter, time: selectedDate})
  }

  const toggleOpenTimePicker = () => {
    setShowSelectTime(true)
  }

  const handleSubmit = () => {
    const { subject, time, week_day } = formFilter
    
    const timeFormated = `${time?.getHours()}:${time?.getMinutes()}`

    getTeachersFiltered(subject, week_day, timeFormated)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Matéria</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={formFilter.subject}
          onValueChange={(value) => handleFilter('subject', value as string)}
        >
          {
            SUBJECT_LIST.map(subject => (
              <Picker.Item key={subject.value} label={subject.label} value={subject.value} />
            ))
          }
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <View style={styles.inputBlockWeekDay}>
          <Text style={styles.label}>Dia da semanna</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={formFilter.week_day}
              onValueChange={(value) => handleFilter('week_day', value as string)}
            >
              {
                WEEK_DAYS.map(subject => (
                  <Picker.Item key={subject.value} label={subject.label} value={subject.value} />
                ))
              }
            </Picker>
          </View>
        </View>

        <View style={styles.inputBlockTime}>
          <Text style={styles.label}>Horário</Text>
          <RectButton onPress={toggleOpenTimePicker} style={styles.input}>
            <Text>
              {
                formFilter.time
                  ? `${formFilter.time.getHours().toString().padStart(2, '0')}:${formFilter.time.getMinutes().toString().padStart(2, '0')}` 
                  : 'Qual horário?'
              }
            </Text>
          </RectButton>
          {
            showSelectTime && (
              <DateTimePicker
                is24Hour={true}
                value={formFilter.time || new Date}
                onChange={(e, value) => handleChangeTime(value)}
                mode="time"
              />
            )
          }          
        </View>
      </View>

      <RectButton onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText} >Filtrar</Text>
      </RectButton>

    </View>
  )
}

export default Filter
