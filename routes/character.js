// routes/character.js

const express = require("express");
const Character = require("../models/characterModel"); // 파일명과 맞춤
const router = express.Router();


router.post('/',async(req,res)=>{
    try {
        const {name, level, isOnline}=req.body

        if(!name || typeof level !=='number'){
            return res.status(400).json({message:'name과 level은 필수 입니다.'})
        }
        const newChar =new Character({
            name, 
            level,
            isOnline:isOnline ?? false
        })

        const saveChar = await newChar.save()

        res.status(200).json({message:'캐릭터 추가하기 성공',character:saveChar})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'서버오류',error})
    }
})



module.exports = router;
