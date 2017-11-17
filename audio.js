function startUserMedia(stream, context) {
    let context = new AudioContext();
    let microphone = context.createMediaStreamSource(stream);

}

function logError(error) {

}

export class Recorder {

    recording = false;

    constructor(worker) {
        let _this = this;

        this.worker = worker;

        this.audioNode.onaudioprocess = function (event) {
            let buffer = event.inputBuffer.getChannelata(0);

            worker.postMessage({
                command: 'record',
                buffer: buffer
            });
        };

        this.worker.onmessage = function (event) {
            switch (e.data.command) {
                case 'abc':
                    break;
                default:
                    break;
            }
        }

        navigator.getUserMedia({ audio: true },
            function (stream) {
                _this.context = new AudioContext();
                _this.microphone = _this.context.createMediaStreamSource(stream);
                _this.processor = _this.context.createScriptProcessor(4096, 1, 1);

                _this.processor.onaudioprocess = function (event) {
                    let buffer = event.inputBuffer.getChannelata(0);

                    worker.postMessage({
                        command: 'record',
                        buffer: buffer
                    });
                };

            }, logError);
    }

    start() {
        
        //this.microphone.context()
    }

    stop() {

    }
}
