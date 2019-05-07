const secOne = document.querySelector('.seconds-one')
const secTwo = document.querySelector('.seconds-two')
const minOne = document.querySelector('.minutes-one')
const minTwo = document.querySelector('.minutes-two')
const hrOne = document.querySelector('.hours-one')
const hrTwo = document.querySelector('.hours-two')

const HR_ONE_TWO = document.getElementById('hrOne-2')
const HR_ONE_ONE = document.getElementById('hrOne-1')
const HR_TWO_EIGHT = document.getElementById('hrTwo-8')
const HR_TWO_FOUR = document.getElementById('hrTwo-4')
const HR_TWO_TWO = document.getElementById('hrTwo-2')
const HR_TWO_ONE = document.getElementById('hrTwo-1')
const MIN_ONE_FOUR = document.getElementById('minOne-4')
const MIN_ONE_TWO = document.getElementById('minOne-2')
const MIN_ONE_ONE = document.getElementById('minOne-1')
const MIN_TWO_EIGHT = document.getElementById('minTwo-8')
const MIN_TWO_FOUR = document.getElementById('minTwo-4')
const MIN_TWO_TWO = document.getElementById('minTwo-2')
const MIN_TWO_ONE = document.getElementById('minTwo-1')
const SEC_ONE_FOUR = document.getElementById('secOne-4')
const SEC_ONE_TWO = document.getElementById('secOne-2')
const SEC_ONE_ONE = document.getElementById('secOne-1')
const SEC_TWO_EIGHT = document.getElementById('secTwo-8')
const SEC_TWO_FOUR = document.getElementById('secTwo-4')
const SEC_TWO_TWO = document.getElementById('secTwo-2')
const SEC_TWO_ONE = document.getElementById('secTwo-1')

function setDate() {
	const now = new Date()
	const secs = now.getSeconds()
	const mins = now.getMinutes()
	const hrs = now.getHours()

	const sec1 = secs < 10 ? '0' : secs.toString().substr(0, 1)
	const sec2 =
		secs < 10 ? secs.toString().substr(0, 1) : secs.toString().substr(1, 2)

	const min1 = mins < 10 ? '0' : mins.toString().substr(0, 1)
	const min2 =
		mins < 10 ? mins.toString().substr(0, 1) : mins.toString().substr(1, 2)
	const hr1 = hrs < 10 ? '0' : hrs.toString().substr(0, 1)
	const hr2 =
		hrs < 10 ? hrs.toString().substr(0, 1) : hrs.toString().substr(1, 2)

	secOne.innerHTML = sec1
	secTwo.innerHTML = sec2
	minOne.innerHTML = min1
	minTwo.innerHTML = min2
	hrOne.innerHTML = hr1
	hrTwo.innerHTML = hr2

	switch (sec1) {
		case '0':
			SEC_ONE_FOUR.classList.remove('on')
			SEC_ONE_TWO.classList.remove('on')
			SEC_ONE_ONE.classList.remove('on')
			break
		case '1':
			SEC_ONE_FOUR.classList.remove('on')
			SEC_ONE_TWO.classList.remove('on')
			SEC_ONE_ONE.classList.add('on')
			break
		case '2':
			SEC_ONE_FOUR.classList.remove('on')
			SEC_ONE_TWO.classList.add('on')
			SEC_ONE_ONE.classList.remove('on')
			break
		case '3':
			SEC_ONE_FOUR.classList.remove('on')
			SEC_ONE_TWO.classList.add('on')
			SEC_ONE_ONE.classList.add('on')
			break
		case '4':
			SEC_ONE_FOUR.classList.add('on')
			SEC_ONE_TWO.classList.remove('on')
			SEC_ONE_ONE.classList.remove('on')
			break
		case '5':
			SEC_ONE_FOUR.classList.add('on')
			SEC_ONE_TWO.classList.remove('on')
			SEC_ONE_ONE.classList.add('on')
			break
	}

	switch (sec2) {
		case '0':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.remove('on')
			break
		case '1':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.add('on')
			break
		case '2':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.add('on')
			SEC_TWO_ONE.classList.remove('on')
			break
		case '3':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.add('on')
			SEC_TWO_ONE.classList.add('on')
			break
		case '4':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.add('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.remove('on')
			break
		case '5':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.add('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.add('on')
			break
		case '6':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.add('on')
			SEC_TWO_TWO.classList.add('on')
			SEC_TWO_ONE.classList.remove('on')
			break
		case '7':
			SEC_TWO_EIGHT.classList.remove('on')
			SEC_TWO_FOUR.classList.add('on')
			SEC_TWO_TWO.classList.add('on')
			SEC_TWO_ONE.classList.add('on')
			break
		case '8':
			SEC_TWO_EIGHT.classList.add('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.remove('on')
			break
		case '9':
			SEC_TWO_EIGHT.classList.add('on')
			SEC_TWO_FOUR.classList.remove('on')
			SEC_TWO_TWO.classList.remove('on')
			SEC_TWO_ONE.classList.add('on')
			break
	}

	switch (min1) {
		case '0':
			MIN_ONE_FOUR.classList.remove('on')
			MIN_ONE_TWO.classList.remove('on')
			MIN_ONE_ONE.classList.remove('on')
			break
		case '1':
			MIN_ONE_FOUR.classList.remove('on')
			MIN_ONE_TWO.classList.remove('on')
			MIN_ONE_ONE.classList.add('on')
			break
		case '2':
			MIN_ONE_FOUR.classList.remove('on')
			MIN_ONE_TWO.classList.add('on')
			MIN_ONE_ONE.classList.remove('on')
			break
		case '3':
			MIN_ONE_FOUR.classList.remove('on')
			MIN_ONE_TWO.classList.add('on')
			MIN_ONE_ONE.classList.add('on')
			break
		case '4':
			MIN_ONE_FOUR.classList.add('on')
			MIN_ONE_TWO.classList.remove('on')
			MIN_ONE_ONE.classList.remove('on')
			break
		case '5':
			MIN_ONE_FOUR.classList.add('on')
			MIN_ONE_TWO.classList.remove('on')
			MIN_ONE_ONE.classList.add('on')
			break
	}

	switch (min2) {
		case '0':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.remove('on')
			break
		case '1':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.add('on')
			break
		case '2':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.add('on')
			MIN_TWO_ONE.classList.remove('on')
			break
		case '3':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.add('on')
			MIN_TWO_ONE.classList.add('on')
			break
		case '4':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.add('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.remove('on')
			break
		case '5':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.add('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.add('on')
			break
		case '6':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.add('on')
			MIN_TWO_TWO.classList.add('on')
			MIN_TWO_ONE.classList.remove('on')
			break
		case '7':
			MIN_TWO_EIGHT.classList.remove('on')
			MIN_TWO_FOUR.classList.add('on')
			MIN_TWO_TWO.classList.add('on')
			MIN_TWO_ONE.classList.add('on')
			break
		case '8':
			MIN_TWO_EIGHT.classList.add('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.remove('on')
			break
		case '9':
			MIN_TWO_EIGHT.classList.add('on')
			MIN_TWO_FOUR.classList.remove('on')
			MIN_TWO_TWO.classList.remove('on')
			MIN_TWO_ONE.classList.add('on')
			break
	}

	switch (hr1) {
		case '0':
			HR_ONE_TWO.classList.remove('on')
			HR_ONE_ONE.classList.remove('on')
			break
		case '1':
			HR_ONE_TWO.classList.remove('on')
			HR_ONE_ONE.classList.add('on')
			break
		case '2':
			HR_ONE_TWO.classList.add('on')
			HR_ONE_ONE.classList.remove('on')
			break
	}

	switch (hr2) {
		case '0':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.remove('on')
			break
		case '1':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.add('on')
			break
		case '2':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.add('on')
			HR_TWO_ONE.classList.remove('on')
			break
		case '3':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.add('on')
			HR_TWO_ONE.classList.add('on')
			break
		case '4':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.add('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.remove('on')
			break
		case '5':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.add('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.add('on')
			break
		case '6':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.add('on')
			HR_TWO_TWO.classList.add('on')
			HR_TWO_ONE.classList.remove('on')
			break
		case '7':
			HR_TWO_EIGHT.classList.remove('on')
			HR_TWO_FOUR.classList.add('on')
			HR_TWO_TWO.classList.add('on')
			HR_TWO_ONE.classList.add('on')
			break
		case '8':
			HR_TWO_EIGHT.classList.add('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.remove('on')
			break
		case '9':
			HR_TWO_EIGHT.classList.add('on')
			HR_TWO_FOUR.classList.remove('on')
			HR_TWO_TWO.classList.remove('on')
			HR_TWO_ONE.classList.add('on')
			break
	}
}

setInterval(setDate, 1000)
setDate()
