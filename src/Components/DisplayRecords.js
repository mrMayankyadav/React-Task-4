import axios from 'axios';
import {useEffect, useState} from 'react';

export function DisplayRecords()
{

    const [resData, setResData]=useState([]);

    useEffect(()=>{
        const url = "https://dummyjson.com/users";
        axios.get(url)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Read successfull");
                setResData(res.data.users);
                console.log(res.data.users[0].firstName);
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }, [])

    return(
        <div>
            <table>
                <tr className="bg-info border-bottom text-center">
                    <th className="border-end">ID</th>
                    <th className="border-end">First Name</th>
                    <th className="border-end">Last Name</th>
                    <th className="border-end">Age</th>
                    <th className="border-end">Gender</th>
                    <th className="border-end">Email</th>
                    <th className="border-end">Phone</th>
                    <th className="border-end">User Name</th>
                    <th className="border-end">Data of Birth</th>
                    <th className="border-end">Image</th>
                    <th className="border-end">Height</th>
                    <th className="border-end">Weight</th>
                    <th colspan="2" className="border-end">Address</th>
                    <th className="border-end">Bank Card Expire</th>
                    <th className="border-end">Company Name</th>
                </tr>
                <tr className="bg-info border-bottom text-center">
                    <th colspan="12" className="border-end"></th>
                    <th className="border-end">City</th>
                    <th className="border-end">Coordinates</th>
                    <th colspan="2" className="border-end"></th>
                </tr>
                <tbody className="bg-secondary">
                    {
                        resData.map((user, index)=>{
                            return(
                            <tr key={index} className="border-bottom p-1">
                                <td className="border-end">{user.id}</td>
                                <td className="border-end">{user.firstName}</td>
                                <td className="border-end">{user.lastName}</td>
                                <td className="border-end">{user.age}</td>
                                <td className="border-end">{user.gender}</td>
                                <td className="border-end">{user.email}</td>
                                <td className="border-end">{user.phone}</td>
                                <td className="border-end">{user.username}</td>
                                <td className="border-end">{user.birthDate}</td>
                                <td className="border-end"><img src = {user.image} style={{height:"50px",width:"50px"}}/></td>
                                <td className="border-end">{user.height}</td>
                                <td className="border-end">{user.weight}</td>
                                <td className="border-end">{user.address.city}</td>
                                <td className="border-end">{JSON.stringify(user.address.coordinates)}</td>
                                <td className="border-end">{user.bank.cardExpire}</td>
                                <td className="border-end">{user.company.name}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}