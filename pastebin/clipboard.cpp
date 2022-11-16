#include <Windows.h>
#include <stdio.h>

BOOL CopyToClipboard(char* pszData)
{
    if(::OpenClipboard(NULL))
    {
        ::EmptyClipboard();
        HGLOBAL clipbuffer;
        char *buffer;
        clipbuffer = ::GlobalAlloc(GMEM_DDESHARE, strlen(pszData)+1);
        buffer = (char *)::GlobalLock(clipbuffer);
        strcpy_s(buffer,strlen(pszData)+1, pszData);
        ::GlobalUnlock(clipbuffer);
        ::SetClipboardData(CF_TEXT, clipbuffer);
        ::CloseClipboard();
        return TRUE;
    }
    return FALSE;
}

BOOL GetTextFromClipboard()
{
    if(::OpenClipboard(NULL))
    {
        
        HGLOBAL hMem = GetClipboardData(CF_TEXT);
        if(NULL != hMem)
        {
            char* lpStr = (char*)::GlobalLock(hMem); 
            if(NULL != lpStr)
            {
                printf("%s",lpStr);
                ::GlobalUnlock(hMem);
            }
        }
        ::CloseClipboard();
        return TRUE;
    }
    return FALSE;
}