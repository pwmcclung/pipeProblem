function pipeFix(numbers){
    let start = numbers[0]
    let end = numbers[numbers.length -1]
    let pipe= []
    for (let i = start; i <= end; i++){
      pipe.push(i)
    }
  return pipe
}
