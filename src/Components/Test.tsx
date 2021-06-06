import React, { useEffect, useRef } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootObject } from '../store/actionTypes';
import { useAction } from '../store/hooks/useAction';
import { useTypedSelector } from '../store/hooks/useTypedSelector';


const Test: React.FC = () => {
    const ref = useRef<HTMLInputElement | null>(null);
    const { data, loading } = useTypedSelector(state => state.Repository);

    const getPackages = useAction();
    useEffect(() => {
        getPackages('hello world')
    }, []);
    const onchange = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => {
        if (ref.current) {
            getPackages(ref.current.value)
        }
    }
    return (
        <div>
            <input type="text" ref={ref} onChange={onchange} />
            <Button onClick={onchange}>click me</Button>
            {
                loading ? (
                    <div className="w-100 h-100 position-absolute d-flex justify-content-center text-center align-items-center ">
                        <Spinner animation="border" variant="primary" style={{ width: "5rem", height: "5rem" }} />
                    </div>
                )
                    : data?.objects && (
                        <li>
                            {
                                data.objects.map((objects, index) => {
                                    return <ul key={index}>{objects.package.name}</ul>
                                })
                            }
                        </li>
                    )
            }
        </div>
    )
}



export default Test;