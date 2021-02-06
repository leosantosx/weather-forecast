import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import { Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import Header from '../../components/Header'
import Content from '../../components/Content'
import Section from '../../components/Section'
import Form from '../../components/Form'
import Error from '../../components/Error'

export default function Dashboard(){

    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        api.get('', { params: {  q: 'alagoas'}})
        .then(response => setWeather(response.data))
    }, [])

    async function handleGetWeather(event){
        event.preventDefault();
        if(!city){
            setError('Digite sua cidade')
            return
        }

        try{
            setError('')
            const response = await api.get('', { params: {  q: city} })
            setWeather(response.data)
            setCity('')
        }catch{
            setError('Ocorreu um erro na requisição')
            return
        }

    }

    return (
        <>
            <Content>
                {weather.current && 
                    <>
                        <Header nameCity={`${weather.location.name} - ${weather.location.country}`}/>
                        <Section 
                            image={weather.current.condition.icon.replaceAll('64', '128')}
                            altImage={weather.current.condition.text}
                            text={weather.current.condition.text}
                            tempC={parseInt(weather.current.temp_c)}
                        />
                    </>
                }

                <Form>  
                    <Input onChange={event => setCity(event.target.value)} 
                        value={city}
                        icon='map marker alternate' 
                        iconPosition='left' placeholder='Digite sua cidade' />

                    {error && <Error>{error}</Error>}

                    <div>
                        <Button onClick={handleGetWeather} content='Buscar'/>
                    </div>
                </Form>
                    
            </Content>
        </>
    )
}