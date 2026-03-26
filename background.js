// background.js

chrome.action.onClicked.addListener(async (tab) => {
  try {
    const dataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, {
      format: "png"
    });

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `screenshot-${timestamp}.png`;

    await chrome.downloads.download({
      url: dataUrl,
      filename,
      saveAs: false
    });
  } catch (error) {
    console.error("Failed to capture screenshot:", error);
  }
});
