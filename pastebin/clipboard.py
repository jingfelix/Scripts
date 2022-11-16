import win32clipboard
import win32con

def getTextFromClipboard():

    win32clipboard.OpenClipboard(0)
    data = win32clipboard.GetClipboardData(win32con.CF_TEXT)
    
    # TODO: deal with different file format
    print(data.decode("utf-8"))
    win32clipboard.CloseClipboard()

def copyToClipboard(buf:str):
    win32clipboard.OpenClipboard()
    win32clipboard.EmptyClipboard()
    win32clipboard.SetClipboardText(buf)
    win32clipboard.CloseClipboard()

if __name__ == '__main__':
    getTextFromClipboard()
    copyToClipboard("Hello World")
    getTextFromClipboard()