import React, { useEffect, useState } from 'react'

const Card = () => {
    const [imageData, setImageData] = useState([]);
    const [peopleData, setPeopleData] = useState([]);
    
    useEffect(()=>{
        fetch('https://itisusama.github.io/api-repo/images.json').then(response => response.json())
        .then((imageData)=>{
            setImageData(imageData);
        })
        .catch(error => console.error(error))
    }, [imageData]);

    useEffect(()=>{
        fetch('https://itisusama.github.io/api-repo/people.json').then(response => response.json())
        .then((peopleData)=>{
            const females = peopleData.filter(person => person.gender === 'Female');
            setPeopleData(females);
        })
        .catch(error => console.error(error))
    }, [])

  return (
    <div className='mt-24 flex flex-wrap'>

        {
            imageData.map((picture, index) => (
                
                <section className='relative mt-3'>
                    {/* Image */}
                    <div className='p-2 bg-[#8f241b] w-fit'>
                        <img src={picture.imageURL} alt="people" className='w-[250px] h-[300px]'/>
                    </div>
                    {/* Name */}
                    <div className="w-[250px] flex items-center justify-center">
                        <p className="p-3 bg-slate-100 text-center w-fit mt-[-10%]">
                            {
                             peopleData[index] && (
                                 <span>{peopleData[index].first_name} {peopleData[index].last_name}</span>
                             )
                         }
                        </p>
                    </div>

                    <div className="w-[250px] flex items-center justify-center">
                        <p className="p-3 bg-[#f5cd4c] text-center w-fit rotate-6">
                        {
                             peopleData[index] && (
                                 <span>{peopleData[index].phone}</span>
                             )
                         }  
                        </p>
                    </div>
                </section>
            ))
        }
    </div>
  )
}

export default Card
