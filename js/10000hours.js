const startButton = document.querySelector('.start_btn')
const openButton = document.querySelector('.modal_btn')
const closeButton = document.querySelector('.close_btn')
const shareButton = document.querySelector('.share_btn')
const result = document.querySelector('.result')
const modal = document.querySelector('#modal')
const loading = document.querySelector('.result_loading')

function calculator() {
	const fieldValue = document.querySelector("#field_value");
	let timeValue = document.querySelector("#time_value");
	let timeValue_int = Number(timeValue.value);

	const fieldResult = document.querySelector(".field_result");
	const timeResult = document.querySelector(".time_result");

	if (fieldValue.value == "") {
		alert('입력을 해주셔야죠!');
		fieldValue.focus();
		return false;
	} else if (timeValue.value == "") {
		alert('입력을 해주셔야죠!');
		timeValue.focus();
		return false;
	} else if (timeValue.value > 24) {
		alert('하루에 24시간 이상 공부하는 초능력자세요?');
		timeValue.focus();
		return false;
	} else if (timeValue.value < 1) {
		alert('하루에 1시간도 공부 안하시는건가요.. (한심)');
		timeValue.focus();
		return false;
	}

	result.style.display = 'none';
	loading.style.display = 'flex';

	setTimeout(function() {
		loading.style.display = 'none';
		result.style.display = 'flex';
		fieldResult.innerText = fieldValue.value;
		timeResult.innerText = parseInt((10000 / timeValue_int), 10);
	}, 1300);
}

function openModal() {
	modal.style.display = 'flex';
}

function closeModal() {
	modal.style.display = 'none';
}

window.onclick = function(event) {
	if (event.target == modal) {
		closeModal();
	}
}
function copyUrl() {
	const url = window.location.href;
	navigator.clipboard.writeText(url).then(() => {
		alert("귀찮았지만, 어찌되었든 URL이 복사된거같긴 합니다...");
	});
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);