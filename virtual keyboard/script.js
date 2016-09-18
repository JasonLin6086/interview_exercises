document.addEventListener('DOMContentLoaded', function() {

	// ******
	// When a user clicks a key the characters
	// gets entered in the text field
	// Your implementation goes here
	// ******
    $(document).ready(function() {
        var textInput = $(":input")[0];

        function updateValue(value) {
            if (textInput) {
                textInput.value = value;
            }
        }

        function isCapslock(e) {
            e = (e) ? e : window.event;
            var charCode = false;
            if (e.which) {
                charCode = e.which;
            } else if (e.keyCode) {
                charCode = e.keyCode;
            }

            var shifton = false;
            if (e.shiftKey) {
                shifton = e.shiftKey;
            } else if (e.modifiers) {
                shifton = !!(e.modifiers & 4);
            }

            if (charCode >= 97 && charCode <= 122 && shifton) {
                return true;
            }

            if (charCode >= 65 && charCode <= 90 && !shifton) {
                return true;
            }

            return false;
        }

        function updateChars(caps) {
            $(".key").each(function(index) {
                if (caps)
                    $(this).text($(this).text().toUpperCase());
                else
                    $(this).text($(this).text().toLowerCase());
            });
        }

        var isCaps = isCapslock();
        updateChars(isCaps);

        $(".key").mousedown(function() {
            var value = $(this).data("key");
            value = (value == "space") ? " " : value;
            if (textInput) {
                value = textInput.value + (isCaps ? value.toUpperCase() : value.toLowerCase());
            }
            updateValue(value);
        });

        $(document).keydown(function(event) {
            if ( event.which == 13 || event.which == 8) {
                event.preventDefault();
            }

            if (event.which == 8) {
                var value = textInput.value;
                value = value.substring(0, value.length - 1);
                updateValue(value);
            }

            if (event.which == 20) {
                isCaps = !isCaps;
                updateChars(isCaps);
            }
        });

        $(document).keypress(function(event) {
            var value = textInput.value;
            value += event.key;
            updateValue(value);
        });

    });

}, false);
