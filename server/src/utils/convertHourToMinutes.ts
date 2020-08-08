const convertHourToMinutes = (time: string) : number => {
  const [hour, minutes] = time.split(':').map(Number)

  const timeinMinutes = (hour * 60) + minutes

  return timeinMinutes
}

export { convertHourToMinutes }
