import React,{useState, useEffect} from 'react'
import { Bar,Line } from 'react-chartjs-2';
import DatePicker from 'react-date-picker'
const SalesGraph = () => {
    
    const [realScore,setRealScore] = useState()
    const [realMonth,setRealMonth] = useState()
  
    const user = JSON.parse(localStorage.getItem('profile'))
    const [selectedDate, handleDateChange] = useState(new Date());
  
    var scoreList = [];
    var monthNames=[]
    
    const intilizeScoreList = () => {
        const days = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1,0).getDate()
        for(var i=0;i<days;i++){
          scoreList.push(0)
        }
        for(var i=0;i<days;i++){
          var monthname = new Date(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${i+1}`).toDateString().slice(4,10)
          monthNames.push(monthname)
        }
        setRealMonth(monthNames)
        
        const fetchScore = async () => {
          const response = await fetch(`http://localhost:5000/order/merchant/${user?.result?._id}`,{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({startDate:new Date(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-01`).getTime(),endDat:new Date(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${days}`).getTime(),all:false})
          })
          return response.json()
        }
        
        fetchScore().then(data => {
          console.log("orders",selectedDate)
          data.map(singleData=>{
            scoreList[new Date(singleData.date)-1]+=parseInt(singleData.amount)
          })
          setRealScore(scoreList)
      })
  
      console.log(monthNames)
  
    }
  
    useEffect(() => {
      intilizeScoreList()
    },[selectedDate])



    return (
        <div>
            <div className="m-2 flex justify-center text-blue-500">
                <DatePicker
                    className="react-datetime-schedule-graph"
                    views={["year", "month"]}
                    label="Year and Month"
                    helperText="With min and max"
                    minDate={new Date("2021-09-01")}
                    maxDetail="year"
                    minDetail="month"
                    value={selectedDate}
                    format="MMMM y"
                    onChange={handleDateChange}
                />
            </div>
            <div className="bg-white w-screen md:w-full h-80">
            <Line
                data={{
                labels:realMonth,
                datasets:[
                    {
                    label:'Profit',
                    data:realScore,
                    backgroundColor:["green"],
                    borderColor:["orange"],
                    borderWidth:1
                    }
                ]
                }}
                options={{
                maintainAspectRatio: false ,
                scales: {
                    yAxes: [
                    {
                        stacked: true,
                        ticks: {
                          max:50,
                        beginAtZero: true,
                        },
                    },
                    ],
                    xAxes: [
                    {
                        stacked: true,
                    },
                    ],
                },
                }}
            />
            </div>
        </div>
    )
}

export default SalesGraph
