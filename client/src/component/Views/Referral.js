import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { RefSend } from '../../api/index';

export default function Referral() {
    const navigate=useNavigate()
    const user = JSON.parse(localStorage.getItem("profile"));
    const [completed, setCompleted]=useState(false)
    const handleRefX=async ()=>
    {
        const userId=user.result._id
        const friendId=user.result._id
        const datax={userId, friendId}
        console.log("Starting this")
        try
        {   
            const {data}=await RefSend(datax)
            console.log(data)
            const tempData=user
            tempData.result=data
            localStorage.setItem('profile', JSON.stringify(tempData))
            setCompleted(true)
        }
        catch(error)
        {
            console.log(error)
        }
        
        
        
    }

    useEffect(()=>
    {
        if (!user)
        {
            navigate('/')
        }
    }, [])
    if (user)
    {
        return (
            <div className="grid md:grid-cols-2 gap-3 ">
                <div className="text-center">
                    
                    <h1 className="text-xl font-bold">Refer to your friends!</h1>
                    <CopyToClipboard text={user.result._id}>
                    <button className="p-2 mt-5 border-black border-2 hover:bg-black hover:ring-2 hover:ring-black hover:text-white">Copy the code</button>
                    </CopyToClipboard>
                    <div className="mt-5"><FacebookShareButton url={window.location.href} title={`Share this code to avail! ${user.result._id}`}>
                        <FacebookIcon />
                    </FacebookShareButton>
                    <WhatsappShareButton url={window.location.href} title={`Share this code to avail! ${user.result._id}`}>
                        <WhatsappIcon />
                    </WhatsappShareButton>
                    <TwitterShareButton url={window.location.href} title={`Share this code to avail! ${user.result._id}`}>
                        <TwitterIcon />
                    </TwitterShareButton>
                    
                    </div>
                    
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-bold">Have a code? Avail it here!</h1>
                    <input className="border-2 border-gray-400 h-12 focus:border-gray-600 mt-5"/>
                    <button onClick={handleRefX} className="p-2 mt-5 border-black border-2 hover:bg-black hover:ring-2 hover:ring-black hover:text-white">Copy the code</button>
                    {!completed?<p></p>:<p className="font-bold text-lg">Your coin balance has increased by 100!</p>}
                </div>
            </div>
        )
    }
    else
    {
        return (<div></div>)
    }
    
}
