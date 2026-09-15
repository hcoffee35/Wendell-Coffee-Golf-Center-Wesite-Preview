document.querySelector('.menuBtn')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.links')?.classList.remove('open')));

const inquiryForm=document.querySelector('#lesson');
if(inquiryForm){
  const submit=inquiryForm.querySelector('button[type="button"]');
  submit?.addEventListener('click',()=>{
    if(!inquiryForm.reportValidity()) return;
    const fields=inquiryForm.querySelectorAll('input, select, textarea');
    const values={};
    fields.forEach(field=>{ values[field.getAttribute('aria-label')||field.name||field.tagName]=field.value.trim(); });
    const subject=`Online Inquiry — ${values['Inquiry type']||'Website Inquiry'}`;
    const body=[
      `Name: ${values['Name']||''}`,
      `Email: ${values['Email']||''}`,
      `Phone: ${values['Phone']||''}`,
      `Inquiry Type: ${values['Inquiry type']||''}`,
      '',
      `Message: ${values['Message']||''}`
    ].join('\n');
    window.location.href=`mailto:coffee.event.center@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
