import React, { useEffect, useState } from 'react'
import {Country, State, City } from 'country-state-city'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const countries = Country.getAllCountries()
let storeStates = []
let storeCities = []
let countryISO = ''

const StoreDetails = ({selectedCSC, setSelectedCSC}) => {
    const [value,setValue]  = useState('')

    console.log("rerender")

    const handleCountryChange = (e)=>{
        setSelectedCSC({...selectedCSC, country:e.target.value})
    }
    
    const handleStateChange = (e)=>{
        setSelectedCSC({...selectedCSC, state:e.target.value})
    }

    const handleCityChange = (e)=>{
        setSelectedCSC({...selectedCSC, city:e.target.value})
    }

    const handeChangeStreetAddress = (e)=>{
        selectedCSC.streetAddress = e.target.value
    }
    const handeChangeStoreName = (e)=>{
        selectedCSC.storeName = e.target.value
    }
    
    
    const changeState = (e)=>{
        console.log("Fuck")
        storeStates = State.getStatesOfCountry(e)
        countryISO=e
    }

    const changeCity = (e)=>{
        storeCities = City.getCitiesOfState(countryISO,e)
        console.log(storeCities)
    }

    return (
        <div >
            <FormControl sx={{ px: 1,mt: 3, minWidth: 120 }} className="m-1" fullWidth>
                <TextField  label="Store Name" variant="outlined"  value={selectedCSC.storeName} fullWidth onChange={handeChangeStoreName}/>
            </FormControl>
            <FormControl sx={{ px: 1,mt: 3, minWidth: 120 }} className="m-1" fullWidth>
                <TextField  label="Street Address" variant="outlined"  value={selectedCSC.streetAddress} fullWidth onChange={handeChangeStreetAddress}/>
            </FormControl>
            <FormControl sx={{ px: 1, mt:3, minWidth: 120 }} className="m-3 w-1/2">
                <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCSC.country}
                label="Country"
                onChange={handleCountryChange}
                >
                {countries.map(country => {
                    return (
                        <MenuItem value={country.name} onClick={()=>changeState(country.isoCode)}>{country.name}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>

            <FormControl sx={{px: 1, mt:3,minWidth: 120 }} className="w-1/2 m-3">
                <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                <Select halfWidth
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCSC.state}
                label="State"
                onChange={handleStateChange}
                >
                {storeStates.map(state => {
                    return (
                        <MenuItem value={state.name} onClick={()=>changeCity(state.isoCode)}>{state.name}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>

            <FormControl sx={{ px: 1,mt: 3, minWidth: 120 }} fullWidth className="m-3">
                <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCSC.city}
                label="City"
                onChange={handleCityChange}
                >
                {storeCities.map(city => {
                    return (
                        <MenuItem value={city.name}>{city.name}</MenuItem>
                    )
                })}
                </Select>
            </FormControl>

        </div>
    )
}

export default StoreDetails
