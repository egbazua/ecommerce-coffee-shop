import React from 'react'
import FilterOrigin from './FilterOrigin'

type FilterControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void
}

const FiltersControlsCategory = ({ setFilterOrigin }: FilterControlsCategoryProps) => {
  return (
    <div className='sm:w-[350px] sm:mt-5 p-6'>
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  )
}

export default FiltersControlsCategory
