function updatePreview() {
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const phone = document.getElementById('phone').value;
    const mobile = document.getElementById('mobile').value;
    const bannerSelection = document.getElementById('bannerSelection').value;

    let bannerURL = "https://ozglobalb2b.img.email/images/67d05d5294eb9.jpg";
    let bannerLink = "https://ozglobalb2b.com/";

    switch (bannerSelection) {
        case "digital":
            bannerURL = "https://ozglobalb2b.img.email/images/67d05d3e36ce8.jpg";
            bannerLink = "https://ozglobalb2b.com/digital-marketing-solutions/";
            break;
        case "creative":
            bannerURL = "https://ozglobalb2b.img.email/images/67d05d4beead2.jpg";
            bannerLink = "https://ozglobalb2b.com/creative/";
            break;
        case "strategy":
            bannerURL = "https://ozglobalb2b.img.email/images/67d05d30ead31.jpg";
            bannerLink = "https://ozglobalb2b.com/strategy-solutions/";
            break;
        case "base":
            bannerURL = "https://ozglobalb2b.img.email/images/67d05d5294eb9.jpg";
            bannerLink = "https://ozglobalb2b.com/";
            break;
    }

    let phoneHtml = '';
    if (mobile && phone) {
        phoneHtml = `
            <span style='color:#0F0156;font-size:19px;'>
                <span style="font-weight:bold;">M.</span>
                ${mobile}
            </span>
            <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='8' style='height:2px;width:7px;' alt='' />
            <span style='font-weight:bold;color:#0F0156;font-size:19px;'>|</span>
            <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='8' style='height:2px;width:7px;' alt='' />
            <span style='color:#0F0156;font-size:19px;'>
                <span style="font-weight:bold;">T.</span>
                ${phone}
            </span>
        `;
    } else if (mobile) {
        phoneHtml = `
            <span style='color:#0F0156;font-size:19px;'>
                <span style="font-weight:bold;">M.</span>
                ${mobile}
            </span>
        `;
    } else if (phone) {
        phoneHtml = `
            <span style='color:#0F0156;font-size:19px;'>
                <span style="font-weight:bold;">T.</span>
                ${phone}
            </span>
        `;
    }

    const signatureHtml = `
    <table cellspacing='0' cellpadding='0' border='0' style='border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:338px;' emb-background-style width='338'>
      <tbody>
        <tr>
          <td style="width:500px;">
            <table cellspacing='0' cellpadding='0' border='0' style=' border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;' emb-background-style width='390'>
              <tbody>
                <tr>
                  <td style='padding:0px;vertical-align:middle;width:70px;font-family:Helvetica,Arial,sans-serif;' width='70'>
                    <table cellspacing='0' cellpadding='0' border='0' style='border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;' width='100%' emb-background-style>
                      <tbody>
                        <tr>
                          <td style="color:#555555;font-size:13px;height:100px;font-family:Helvetica,Arial,sans-serif;">
                            <p style="margin:0px;">
                              <img src="https://ozglobalb2b.img.email/images/67d05ddada0c3.gif" width="90" height="90" style="display:block;border:0px;" border="0" nosend="1" alt="" />
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style='padding-left:20px;padding-top:0px;padding-right:0px;padding-bottom:0px;vertical-align:bottom;width:200px;font-family:Helvetica,Arial,sans-serif;' width='200'>
                    <table cellspacing='0' cellpadding='0' border='0' style='border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;' width='100%' emb-background-style>
                      <tbody>
                        <tr>
                          <td style="color:#555555;font-size:21px;mso-line-height-rule:exactly;line-height:20px;padding-top:0px;padding-bottom:0px;font-family:Helvetica,Arial,sans-serif;">
                            <p style="margin:.1px;">
                              <span style='font-weight:bold;color:#0F0156;font-size:21px;'>${fullName}</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="color:#555555;mso-line-height-rule:exactly;line-height:20px;font-family:Helvetica,Arial,sans-serif;padding-bottom:10px;">
                            <p style="margin:.1px;">
                              <span style='color:#97999B;font-size:18px;'>${jobTitle}</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="color:#555555;font-size:13px;height:1px;font-family:Helvetica,Arial,sans-serif;padding-bottom:5px;">
                            <p style="margin:.1px;padding-top:5px;">
                              <img src="https://ozglobalb2b.img.email/images/67d05dd37e3b9.jpg" width="220" height="1" style="display:block;border:0px;" border="0" nosend="1" alt="" />
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="color:#555555;font-size:13px;mso-line-height-rule:exactly;line-height:29px;font-family:Helvetica,Arial,sans-serif; padding-top:15px; padding-bottom:10px; max-width: 550px; word-break: break-word;">
            <p style="margin:.1px;">
              ${phoneHtml}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="color:#555555;font-size:13px;height:25px;padding-top:10px;font-family:Helvetica,Arial,sans-serif;vertical-align:middle;">
            <p style="margin:.1px;display:inline-block;vertical-align:middle;">
              <a href="https://www.instagram.com/ozglobalb2b/"><img src="https://ozglobalb2b.img.email/images/67d05db5aab49.png" width="25" height="25" style="display:inline-block;vertical-align:middle;border:0px;" border="0" nosend="1" alt="" /></a>
              <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='10' style='height:2px;width:10px;' alt='' />
              <a href="https://www.facebook.com/OZ.Global.B2B"><img src="https://ozglobalb2b.img.email/images/67d05dbc1989f.png" width="25" height="25" style="display:inline-block;vertical-align:middle;border:0px;" border="0" nosend="1" alt="" /></a>
              <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='10' style='height:2px;width:10px;' alt='' />
              <a href="https://www.linkedin.com/company/oz-strategic-branding-&-design/"><img src="https://ozglobalb2b.img.email/images/67d05dc21af7f.png" width="25" height="25" style="display:inline-block;vertical-align:middle;border:0px;" border="0" nosend="1" alt="" /></a>
              <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='10' style='height:2px;width:10px;' alt='' />
              <a href="https://goo.gl/maps/3qW3KKFDuQnFL7R7A"><img src="https://ozglobalb2b.img.email/images/67d05dcd2caef.png" width="25" height="25" style="display:inline-block;vertical-align:middle;border:0px;" border="0" nosend="1" alt="" /></a>
              <img src='https://ozglobalb2b.img.email/img/spacer.gif' height='2' width='17' style='height:2px;width:17px;' alt='' />
              <span style='color:#aac832;font-size:18px;display:inline-block;vertical-align:middle;'>
                <a href="https://ozglobalb2b.com" style="color:#aac832;text-decoration:none;color:#aac832 !important;" target="_blank">ozglobalb2b.com</a>
              </span>
            </p>
          </td>
        </tr>
         <tr>
          <td style="color:#555555;font-size:13px;height:91px;font-family:Helvetica,Arial,sans-serif;padding-top: 20px">
            <p style="margin:.1px;">
              <a href="${bannerLink}"><img src="${bannerURL}" width="350" height="auto" style="display:block;border:0px;" border="0" nosend="1" alt="" /></a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    `;

    document.getElementById('signaturePreview').innerHTML = signatureHtml;
}

function copyToClipboard() {
    const signatureHtml = document.getElementById('signaturePreview').innerHTML;
    const blob = new Blob([signatureHtml], { type: "text/html" });
    const clipboardItem = new ClipboardItem({ "text/html": blob });

    navigator.clipboard.write([clipboardItem])
        .then(() => showToast("Copied to clipboard"))
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
                    <title>Preview</title>
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
