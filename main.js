function createPhoneNumber(numbers = []){
    let first_wave = [];
    let second_wave = [];
    let third_wave = [];

    for(i = 0; i <= 2; i++) {
        first_wave.push(numbers[i]);
    }
    for(i = 3; i <= 5; i++) {
        second_wave.push(numbers[i]);
    }
    for(i = 6; i <= 9; i++) {
        third_wave.push(numbers[i]);
    }
    
    return `(${first_wave.join('')}) ${second_wave.join('')}-${third_wave.join('')}`;
  }