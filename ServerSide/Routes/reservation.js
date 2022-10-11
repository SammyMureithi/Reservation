import express from "express";
const router = express.Router();
const reservation = [{
    id:1,
    firtName: "Elizabeth",
    lastName: "Wanjiru",
    phoneNumber: '174557382',
    time: '170015',
    people: "5",
    status: 'finished'
},
{
    id:2,
    firtName: "Eliud",
    lastName: "Wafula",
    phoneNumber: '000000000',
    time: '170015',
    people: "5",
    status: 'finished'
}
]
router.get( '/', ( req, res ) => {

    res.send(reservation)
} )

export default router;