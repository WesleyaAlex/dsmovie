import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from 'components/Pagination'
import MovieCard from 'components/MovieCard'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'

function Listing() {
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage
            setPageNumber(data.number)
            console.log(data)
        })
    }, [])

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing