const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
	let intervalId;
	let remainingSeconds;

	const updateTimer = () => {
		if (remainingSeconds <= 0) {
			clearInterval(intervalId);
			return;
		}

		let hours = Math.floor(remainingSeconds / 3600);
		let minutes = Math.floor((remainingSeconds % 3600) / 60);
		let seconds = remainingSeconds % 60;

		hours = hours.toString().padStart(2, "0");
		minutes = minutes.toString().padStart(2, "0");
		seconds = seconds.toString().padStart(2, "0");

		timerEl.textContent = `${hours}:${minutes}:${seconds}`;
		remainingSeconds--;
	};

	return (seconds) => {
		clearInterval(intervalId);
		remainingSeconds = seconds;
		updateTimer();
		intervalId = setInterval(updateTimer, 1000);
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
	inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
	const seconds = Number(inputEl.value);

	animateTimer(seconds);

	inputEl.value = "";
});
