import win32clipboard
import win32con
import keyboard
import sys
import time

dict_to_change = {
    "student": "Student",
    "course": "Course",
    "sno": "Sno",
    "sname": "Sname",
    "ssex": "Ssex",
    "sage": "Sage",
    "sdept": "Sdept",
    "scholarship": "Scholarship",
    "cno": "Cno",
    "cname": "Cname",
    "ccredit": "Ccredit",
    "grade": "Grade",
    "sc": "SC",
    "scno": "SCno",
    "\t": " ",
    "\n": " ",
}


def process_text(text: str) -> str:

    for key in dict_to_change.keys():
        text = text.replace(key, dict_to_change[key])

    return text


def func():

    # copy to clipboard needs some time
    # wait till copy done
    time.sleep(0.5)
    win32clipboard.OpenClipboard()
    data = win32clipboard.GetClipboardData(win32con.CF_TEXT)

    print(data.decode("utf-8"))

    data = process_text(data.decode("utf-8"))

    print(data)

    win32clipboard.EmptyClipboard()

    win32clipboard.SetClipboardText(bytes(data, "utf-8"), win32con.CF_TEXT)

    win32clipboard.CloseClipboard()


if __name__ == "__main__":
    try:
        while True:
            keyboard.add_hotkey("ctrl+c", func, suppress=False)
            keyboard.wait()
    except KeyboardInterrupt:
        print("Exit")
        sys.exit(0)

# TODO: deal with exceptions
