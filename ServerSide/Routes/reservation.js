import express from "express";
const router = express.Router();
const reservation = [{
    id:1,
    firtName: "Elizabeth",
    lastName: "Wanjiru",
    phoneNumber: '074557382',
    time: '170015',
    people: "5",
    status: 'finished'
}]
router.get( '/', ( req, res ) => {

    res.send(reservation)
} )

export default router;