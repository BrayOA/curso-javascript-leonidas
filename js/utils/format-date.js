
const defaultDateOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long'
}

 export  function formatDate (date, option = defaultDateOptions ) {
   return new Intl.DateTimeFormat('es', option).format(date)
    

}

export function formatTemp(value){
  return `${Math.floor (value)}°`
}