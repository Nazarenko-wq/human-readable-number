module.exports = function toReadable (number) {
    let str = String(number);

    let arr = [];
    for(let i = 0; i < 1000; i++) {
        arr.push(i);
    }

    let arr2 = ['zero','one','two','three','four','five','six','seven','eigh','nine','ten','eleven','twelve',
    'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    let arr3 = ['twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    // fill object!!!
    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let value = arr2[i];

        obj[key] = value;
        
    }

    // find value untill 20!!!
    for(let key in obj) {
        if(key == str) {
            return obj[key];
        } 
        if(key != str) {
            break;
        }
    }

    // find number after 20!!!
   if(str[0] == 2 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[0] + ' ' + obj[key];
            }
        }
   }

   if(str[0] == 3 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[1] + ' ' + obj[key];
            }
        }
    }
    

    if(str[0] == 4 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[2] + ' ' + obj[key];
            }
        }
    }

    if(str[0] == 5 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[3] + ' ' + obj[key];
            }
        }
    }

    if(str[0] == 6 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[4] + ' ' + obj[key];
            }
        }
    }

    if(str[0] == 7 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[5] + ' ' + obj[key];
            }
        }
    }

    if(str[0] == 8 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[6] + ' ' + obj[key];
            }
        }
    }

    if(str[0] == 9 && str.length == 2) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr3[7] + ' ' + obj[key];
            }
        }
    }

    if(str.length == 3 && str[0] == 1) {
        for(let key in obj) {
            if(key == str[1]) {
                return arr2[1] + ' ' + arr3[8] + ' ' + obj[key];
            }
        }
    }

}
