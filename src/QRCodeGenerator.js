import React,{usestate} from 'react'
import QRCode from 'qrcode'
 
function QRCodeGenerator(){
    const [name,setName]=usestate('')
    const [rollNumber,setRollNumber]=usestate('')
    const [department,setDepartment]=usestate('')
    const [year,setYear]=usestate('')
    const [contactNumber,setContactNumber]=usestate('')
    const [qrCodeDataURL,setQRCodeDataURL]=usestate('')

    const generateQRCode=async()=>{
        const student={
            name,
            rollNumber,
            department,
            year,
            contactNumber,
            qrCodeDataURL

        }
        const studentInfo=JSON.stringify(student)
        try{
            const dataURL=await QRCode.setQRCodeDataURL(studentInfo, {
                errorCorrectionLevel:'H',
                width:500
            })
            setQRCodeDataURL(dataURL)
            //create a temporary anchor element to try
            const downloadLink=document.createElement
            downloadLink .href= dataURL
            downloadLink.download
            downloadLink.click()  

        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h2>Generate QR Code</h2>
            <div>
                <label>
                    Name:
                    <input type='text' value={name} onClick={(e)=>setName(e.target.value)}></input>
                </label>
                <label>
                    Roll Number
                    <input type='text' value={ rollNumber} onClick={(e)=>setRollNumber(e.target.value)}></input>
                </label>
                <label>
                    Department
                    <input type='text' value={department} onClick={(e)=>setDepartment(e.target.value)}></input>  
                </label>
                <label>
                    year
                    <input type='text' value={year} onChange={(e)=>setYear(e.target.value)}></input>  
                </label>
                <label>
                    Contact Number
                    <input type='text' value={contactNumber} onClick={(e)=>setContactNumber(e.target.value)}></input>  
                </label>
                <button onClick={generateQRCode}>Generate QR Code</button>
            </div>
            {qrCodeDataURL && (
                <div>
                    <h3>QR Code generated</h3>
                    <img src={qrCodeDataURL} alt='qr code'/>
                </div>
                

            ) }
         </div>
    )
}
export default QRCodeGenerator