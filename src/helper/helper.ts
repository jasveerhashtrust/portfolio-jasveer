'use client'
export const downloadPdf = () => {
    const pdfUrl = 'src/assets/jasveer_resume_2_year.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'jasveer_resume_2_year.pdf'
    document.body.append(link)
    link.click()
    link.remove()
}
