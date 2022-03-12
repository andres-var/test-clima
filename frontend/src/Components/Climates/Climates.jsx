import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


import { isValidArray } from 'Helpers';
import Climate from 'Components/Climate';

import "./Climates.scss";
import { connect } from 'react-redux';

const Climates = ({
    climates,
}) => {

  return (
    <div id='Climates'>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    { isValidArray(climates) ? climates.map((item, i) => (
                        <Climate key={i} climate={item} index={i} />                
                    ))
                    : (
                        <div>Agrega tus codigos postales</div>
                    ) }
                </Masonry>
            </ResponsiveMasonry>
    </div>
  )
}


const mapStateToProps = ({ climateReducer }) => ({
    climates: climateReducer.climates
})

export default connect(mapStateToProps)(Climates)