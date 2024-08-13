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
    <div className='mt-44'>
        {
            imageData.map((picture, index) => (
                <section key={picture.id}>
                    <img src={picture.imageURL} alt="people" className='w-[200px] h-[200px]'/>
                        {
                            peopleData[index] && (
                                <h1>{peopleData[index].first_name} {peopleData[index].last_name}</h1>
                            )
                        }
                </section>
            ))
        }
    </div>
  )
}

export default Card
