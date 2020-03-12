chrome.extension.sendMessage({}, function (response) {
	var readyStateCheck = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheck);

			var chatCol;
			var giftCol;

			function main() {
				chatCol = document.getElementsByClassName("chat-input__buttons-container tw-flex tw-justify-content-between tw-mg-t-1")
				if (chatCol.length > 0) {
					giftCol = chatCol[0].getElementsByClassName("tw-button tw-button--success tw-interactive");
					if (giftCol.length > 0) {
						giftCol[0].click();
					}
				}
			}
			setInterval(main, 1500);
		}
	}, 10);
});