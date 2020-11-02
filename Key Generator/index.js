function KeyGenerator() {
    const dates = new Date()
    const randomNum = Math.round((dates.getTime()/100000)*Math.random())
    console.log(randomNum);
}

KeyGenerator()
