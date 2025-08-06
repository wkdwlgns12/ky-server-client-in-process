const express = require("express");
let characters = require("../models/characterModel");
const router = express.Router();


router.get('/',(req,res)=>{
    try {
        res.status(200).json({message:'전체 데이터 가져오기',characters})
    } catch (error) {
        
        res.status(500).json({message:'서버 오류'})
    }
})

router.get('/:id',(req,res)=>{
    try {
        const charId=Number(req.params.id)
        const character = characters.find(c=>c.id==charId)

        if(!character){
            return res.status(404).json({message:'캐릭터 없음'})
        }

        res.status(200).json({message:'전체 데이터 가져오기',character})
    } catch (error) {
        
        res.status(500).json({message:'서버 오류'})
    }
})


module.exports = router;