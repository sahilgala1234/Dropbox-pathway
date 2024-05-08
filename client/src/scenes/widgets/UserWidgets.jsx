import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined
} from "@mui/icons-material";
import {Box,Typography,Divider,useTheme} from "@mui/material";
import flexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import UserImage from "../../components/userImage";
import {useSelector} from "react-redux";
import {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

const UserWidget=({userId,picturePath})=>{
    const [user,setUser]=useState(null);
    const {palette}=useTheme();
    const navigate=useNavigate();
    const token=useSelector((state)=>state.token);
    const dark=theme.palette.dark;
    const medium=theme.palette.medium;
    const main=theme.palette.main;

    const getUser=async()=>{
        const response=await fetch(`http://localhost:3001/users/${userId}`,{
            method:"GET",
            headers:{}
        )
        }
    }
}