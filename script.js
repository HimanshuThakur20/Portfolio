document.addEventListener('DOMContentLoaded', () => {

    // intro = document.querySelector('#intro')

    // alert("yo")
    // document.querySelector('#intro').innerHTML = "I am an Engineer &#x1F60C;"

    setInterval(() => {
        // alert("yo")


        document.querySelector('#intro').innerHTML = "I am an Engineer &#x1F60C;"
        setTimeout(() => {
            document.querySelector('#intro').innerHTML = "I am Himanshu &#x1F609;"
        }, 2500)
    }, 5000);

    // setTimeout(() => {
    //     document.querySelector('#intro').innerHTML = "I AM HIMANSHU &#x1F609;"
    // }, 5000)

    setInterval(() => {
        document.querySelector('#logo').style.visibility = 'hidden'

        setTimeout(() => {
            document.querySelector('#logo').style.visibility = 'visible'
        }, 3000)
    }, 5000)

    var i = 1;

    setInterval(() => {
        setTimeout(() => {
            // for (i = 1; i < 11; i++) {
            // if (i == 10)
            //     i = 1

            // setTimeout(() => {
            document.querySelector('.myphotu').innerHTML = `<img src="assets/apic${i}.jpg" alt="my pic" id="pics">`
                // console.log(i)
                // }, 2000)

            // }
        }, 800)

        setTimeout(() => {
            i++
            if (i == 11)
                i = 1
        })


    }, 4000)

    // var btn = document.querySelector('button')
    // btn.addEventListener('click', () => {
    //     document.querySelector('input').value = ''
    // })
})