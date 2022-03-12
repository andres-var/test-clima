import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import RepeaterZipCodes from './RepeaterZipCodes'
import zipCodes from 'Resources/data/zipCodes';
import { connect } from 'react-redux';
import ClimateActions from 'Store/Actions/ClimateActions';


const LIMIT = 5;

const schemaZipCodes = Yup.object().shape({
    zipCodes: Yup.array().of(
        Yup.string()
            .optional()
            .matches(/^\d{5}$/, 'Debe ser de 5 digitos')
            .matches(/^[0-9]*$/, 'Solo se permiten numeros')
            .test("exists", "El zip code no existe", value => zipCodes[value]  ? true : false ) 
            .max(LIMIT, 'You can enter at most ${LIMIT} zip codes')
    )
});

const RepeaterZipCodesContainer = ({
    loading,
    climates,
    addClimate,
}) => {

    const { register, formState : { errors }, handleSubmit } = useForm({
        resolver : yupResolver(schemaZipCodes)
    });

    const onSubmit = data => addClimate(data.zipCodes, false);

    const handleRefresh = () => {
        const codes = climates.map(item => item.request.query);
        addClimate(codes, true);
    }

    return (
        <RepeaterZipCodes
            delegaions={{
                LIMIT,
                errors,
                loading,
                register,
                handleRefresh,
                onSubmit : handleSubmit(onSubmit)
            }}
        />
    )
}
const mapDispatchToProps = (dispatch) => ({
    addClimate    : (climate,clear) => dispatch(ClimateActions.addClimate(climate,clear)),
})

const mapStateToProps = ({ climateReducer }) => ({
    loading : climateReducer?.loading ?? false,
    climates : climateReducer?.climates ?? [],
})

export default connect(mapStateToProps , mapDispatchToProps )(RepeaterZipCodesContainer)