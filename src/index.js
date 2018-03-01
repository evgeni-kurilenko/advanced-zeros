module.exports = function getZerosCount(number, base) {
  // your implementation
    if (number >= base) {
        //двумерный массив, который будет хранить разложение основания системы счисления на простые множители
        var sn = [];
        //разложение на простые множители (с учетом степени)
        //for (var k = 0; k < )
        var k = 0;
        var base1 = base;
        var i;
        for (i = 2; i <= base; i++) {
            if (base1 % i == 0) {
                sn[k] = [i, 0];
                while (base1 % i == 0) {
                    sn[k][1]++;
                    base1 /= i;
                }
                k++;
            }
        }
        
        //делаем массив - в нем будем вычислять, в какой степени содержится каждый нужный простой множитель в number!
        var snr = [];
        for (m = 0; m < sn.length; m++) {
            snr[m] = 0;
        }
        
        for (var i = 0; i < sn.length; i++) {
            for (var j = sn[i][0]; j <= number; j += sn[i][0]) {
                var j1 = j;
                while (j1 % sn[i][0] == 0) {
                    snr[i]++;
                    j1 /= sn[i][0];
                }
                
            }
        }

        
        //высичляем кол-во нулей
        var r = [];
        for (var i =0; i < sn.length; i++) {
            r[i] = (snr[i] - snr[i] % sn[i][1]) / sn[i][1];
        }
        
          var min = r[0];
          for (var i = 0; i < r.length; i++) {
              if (r[i] < min) {
                min = r[i];
              }
          }
        
    }
    return(min);
}