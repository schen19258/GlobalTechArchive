let composerOnline = false; 

function playSequence (string) {
	if (composerOnline === false) {
		return 'Composer is currently offline!';
	}

	const composer = new Tone.Synth().toDestination();

	const notesToHz = {
		c: 261.626,
		d: 293.665,
		e: 329.628,
		f: 349.228,
		g: 391.995,
		a: 440.000,
		b: 493.883
	};

	let count = 0;
	let notesArray = string.split('');
	let lastNote = notesArray.length;

	notesArray = notesArray.map(char => {
		if (char === " ") {
			return 0;
		}
		return notesToHz[char] ?? 100;
	});

	let sequence = new Tone.Sequence((time, note) => {
		composer.triggerAttackRelease(note, 0.1, time);
		count++;
		if (count === lastNote) {
			sequence.stop();
			Tone.Transport.stop();
		}
	}, [...notesArray], "4n").start(0);

	sequence.loop = false;
	Tone.Transport.start();
	return `Playing: ${string}`;
	
}

const startComposerButton = document.querySelector('#start-composer-btn');

startComposerButton.addEventListener('click', () => {
	composerOnline = true;
	Tone.start();
	console.clear();
	console.log('Composer Online!');

	const messageElem = document.querySelector('.message');
	messageElem.innerText = "";
	messageElem.classList.remove('offline');
	startComposerButton.style.display = "none";

  const sequenceForm = document.querySelector('#sequence-form');
  sequenceForm.classList.remove('hidden');

});
