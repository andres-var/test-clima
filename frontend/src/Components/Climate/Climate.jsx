import React from 'react'
import { X } from 'react-feather';

import { isValidArray } from 'Helpers';
import "./Climate.scss";
import ClimateActions from 'Store/Actions/ClimateActions';
import { connect } from 'react-redux';

const Climate = ({
    index,
    climate,
    deleteClimate,
}) => {
const { location, current, request } = climate;
  return (
    <div id="Climate">

    <div className="delete" onClick={() => deleteClimate(index)}> <X size={14} /> </div>

    <div className="item-title">
        <h3>{ location?.name ?? "NA" }</h3>
        <p>{ location?.country ?? "NA" }</p>
        <p>{ location?.region ?? "NA" }</p>
        <p>ZipCode : { request?.query ?? "NA" } </p>
    </div>
    <hr />

    <div className="item-content">
        <div className="container-img">
            {
                isValidArray(current?.weather_icons) ? current?.weather_icons.map((icon, i) => (
                    <img key={i} src={icon} alt="weather-icon" />
                )
                ) : <img src="https://st4.depositphotos.com/4967103/22006/v/1600/depositphotos_220068534-stock-illustration-404-error-found-tee-print.jpg" alt="weather-icon" />
            }
        </div>
        <div>
            <p>Presion: <span>{ current?.pressure ?? "NA" }</span></p>
            <p>Temperatura: <span>{ current?.temperature ?? "NA" }</span></p>
            <p>Humedad: <span>{ current?.humidity ?? "NA" }</span></p>
            <p>Viento: <span>{ current?.wind_speed ?? "NA" }</span></p>
            <p>Visibilidad: <span>{ current?.visibility ?? "NA" }</span></p>
            <p>Descripcion: <span>{ current?.weather_descriptions?.join(",") ?? "NA" }</span></p>
        </div>
    </div>
  
</div> 
  )
}

const mapDispatchToProps = (dispatch) => ({
    deleteClimate : (index) => dispatch(ClimateActions.deleteClimate(index))
})

export default connect(null, mapDispatchToProps)(Climate)

