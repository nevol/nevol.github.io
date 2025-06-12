function updatePreview() {
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const phone = document.getElementById('phone').value;
    const mobile = document.getElementById('mobile').value;

    // Conditionally render phone section
    const phoneHtml = phone 
        ? `<td style="font-family:arial;font-size:14px;color:#008248;">טל: ${phone}</td>
           <td style="padding:0 5px;">
               <img src="https://ozglobalb2b.com/signatures/ambar/icon_ambar.jpg" style="width:6px;height:9px;">
           </td>`
        : "";

    // Conditionally render mobile section
    const mobileHtml = mobile
        ? `<td style="font-family:arial;font-size:14px;color:#008248;">נייד: ${mobile}</td>
           <td style="padding:0 5px;">
               <img src="https://ozglobalb2b.com/signatures/ambar/icon_ambar.jpg" style="width:6px;height:9px;">
           </td>`
        : "";

    // Generate signature HTML dynamically
    const signatureHtml = `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td>
                    <table cellspacing="0" cellpadding="0" border="0" style="direction:rtl;" align="right">
                        <tr>
                            <td style="font-family:arial;font-size:17px;color:#008248;padding:0;">
                                <strong>${fullName}</strong> ${jobTitle}
                            </td>
                        </tr>
                        <tr>
                            <td style="font-family:arial;font-size:14px;color:#008248;padding:10px 0">
                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        ${phoneHtml}
                                        ${mobileHtml}
                                        <td style="font-family:arial;font-size:14px;color:#008248;">
                                            <a href="http://www.ambar.co.il" style="font-family:arial;font-size:14px;color:#008248;text-decoration:none;"><strong>www.ambar.co.il</strong></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px 0;">
                                <img src="https://ozglobalb2b.com/signatures/ambar/logo_ambar.jpg" style="width:177px;height:48px;">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;

    // Update preview container with generated HTML
    document.getElementById('signaturePreview').innerHTML = signatureHtml;
}

function copyToClipboard() {
    const signatureHtml = document.getElementById('signaturePreview').innerHTML;
    const blob = new Blob([signatureHtml], { type: "text/html" });
    const clipboardItem = new ClipboardItem({ "text/html": blob });

    navigator.clipboard.write([clipboardItem])
        .then(() => showToast("החתימה הועתקה בהצלחה"))
        .catch((err) => console.error("Failed to copy signature: ", err));
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '50px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#008248';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 2000);
}

function openPreviewInNewPage() {
    const signatureHtml = document.getElementById('signaturePreview').innerHTML;
    const newWindow = window.open("", "_blank");

    if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>תצוגה מוקדמת</title>
                </head>
                <body>${signatureHtml}</body>
            </html>
        `);
        newWindow.document.close();
    }
}

function downloadSignature() {
    const fileName = document.getElementById('fileName').value || 'signature';
    const signatureHtml = document.getElementById('signaturePreview').innerHTML;
    const blob = new Blob([signatureHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
}
