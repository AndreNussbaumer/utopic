const lunarMonth = 29.530588853

function normalize(value) {

  value = value - Math.floor(value)

  if (value < 0){
    value = value + 1
  }

  return value;
}


function getLunarPhase() {

  const date = new Date()

  const time = date.getTime()
  const tzoffset = date.getTimezoneOffset()

  let julianDate = (time / 86400000) - (tzoffset / 1440) + 2440587.5

  const percent = normalize((julianDate - 2451550.1) / lunarMonth)

  const age = percent * lunarMonth

  if(age < 1.84566){
    return " NEW 🌑"
  } else if(age < 5.53699){
    return "WAXING CRESCENT 🌒"
  } else if(age < 9.22831){
    return "FIRST QUARTER 🌓"
  } else if(age < 12.91963){
    return "WAXING GIBBOUS 🌔"
  } else if(age < 16.61096){
    return "FULL 🌕"
  } else if(age < 20.30228){
    return "WANING GIBBOUS 🌖"
  } else if(age < 23.99361){
    return "LAST QUARTER 🌗"
  } else if(age < 27.68493){
    return "WANING CRESCENT 🌘"
  }

}
