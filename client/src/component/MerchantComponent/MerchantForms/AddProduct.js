import React,{useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Categories from '../../../static/ProductCategoryList'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import {addNewProduct} from '../../../action/Merchant'
const {create} = require('ipfs-http-client')
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

const AddProduct = () => {
    const dispatch = useDispatch()
    const [newProductData, setNewProductData] = useState({name:'',image:[],brand:'',category:'',description:'',price:'',stock:''})
    const [imageHash,setImageHash] = useState([]) 
    const [addImages,setAddImages] = useState(true)
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user)
    const handleAddNewProduct = (e) =>{
        e.preventDefault()
        console.log(user.result)
        dispatch(addNewProduct({id:user.result[0]._id,productData:newProductData}))

    }

    const handleUploadImages = (e) =>{
        e.preventDefault()
        setAddImages(false)
        const file = e.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)

        reader.onloadend =async ()=>{
            const buffer = new Buffer(reader.result)
            const result =await ipfs.add(buffer)
            setImageHash([...imageHash,result.path])
            console.log("added")
            setNewProductData({...newProductData, image:[...newProductData.image,`https://ipfs.infura.io/ipfs/${result.path}`]})
            setAddImages(true)
        }
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-full flex justify-center">
            <h1 className="text-4xl">Add Products</h1>
            </div>
            <div class="col-span-full max-w-6xl">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {imageHash.map(hash=>{
                            return(
                                <div className="col-span-1">
                                    <img src={`https://ipfs.infura.io/ipfs/${hash}`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-2">
                        Add Images
                    {addImages ? <input type="file" className="m-3 px-2 py-2" accept=".png,.jpg,.gif,.jpeg" onChange={handleUploadImages}/> : 'uploading'}
                    </div>
                    
                    <div className="flex flex-wrap m-2">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-question-name">
                           Product Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question-name" type="text" placeholder="Product name"  onChange={(e)=>setNewProductData({...newProductData, name:e.target.value})} required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap mx-2 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                            Brand
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" onChange={(e)=>setNewProductData({...newProductData, brand:e.target.value})} placeholder="Jane"/>
                        </div>
                        <FormControl sx={{ px: 1, mt:3, minWidth: 120 }} className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                            <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={newProductData.category}
                            label="Categories"
                            onChange={(e)=>setNewProductData({...newProductData, category:e.target.value})}
                            >
                            {Categories.map(category => {
                                return (
                                    <MenuItem value={category} >{category}</MenuItem>
                                )
                            })}
                            </Select>
                        </FormControl>
                    </div>
                    <div class="flex flex-wrap mx-2 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                            Stock (Number)
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" onChange={(e)=>setNewProductData({...newProductData, stock:e.target.value})} placeholder="Jane"/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                            Price (In INR)
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" onChange={(e)=>setNewProductData({...newProductData, price:e.target.value})} placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap m-2">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-question-statement">
                            Product Description
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="10" id="grid-question-statement" type="text" onChange={(e)=>setNewProductData({...newProductData, description:e.target.value})} placeholder="Description" required/>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap m-2 mb-6 ">  
                        <button className="py-3 px-4 w-full uppercase font-bold mb-3 m-2 bg-indigo-400 hover:bg-indigo-700 rounded text-black" onClick={handleAddNewProduct}>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
