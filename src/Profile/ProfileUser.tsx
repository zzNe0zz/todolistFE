import React, { useState } from 'react'
import {Col , Row,Avatar,Typography,Input ,Button  , Modal, Upload,message} from "antd"
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile, } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function ProfileUser() {
  const { Title } = Typography;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
   const [checkfile,setCheckfile] = useState<Boolean>() 

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };
  const handleCancel = () => setPreviewOpen(false);
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      setCheckfile(false)
    } 
   
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      setCheckfile(false)
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>{
   if(newFileList[0]?.originFileObj?.type === 'image/jpeg'|| newFileList[0]?.originFileObj?.type === 'image/png'){
      setFileList(newFileList)
   }
   else {
    setFileList([])
   }
          
      // console.log(newFileList[0].originFileObj?.type);
    
  }
  function upInfor (){

  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Row style={{padding:"30px 50px"}}>
  
          <Col span={24}>
                <Row style={{justifyContent:"space-between",alignItems:"center",alignContent:"center",textAlign:"center"}}>
                  <Col span={4}><Title>Profile</Title></Col>
                  <Col span={4}> 
                  <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              name='avatar'
            >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
                 </Col>
                </Row>
            </Col>
         
          <Col span={24} style={{marginBottom:"15px"}}>
                <Title level={5}>Name</Title>
                <Input placeholder="Basic usage" />
          </Col>
          <Col span={24} style={{marginBottom:"15px"}}>
                <Title level={5}>Username</Title>
                <Input placeholder="Basic usage" />
          </Col>
          <Col span={24} style={{marginBottom:"15px"}}>
                <Title level={5}>Email</Title>
                <Input  />
          </Col>
          <Col span={24} style={{marginBottom:"15px"}}>
                <Title level={5}>Phone</Title>
                <Input placeholder="Basic usage" />
          </Col>
         
         <Button type="primary" onClick={upInfor}>Save</Button>
      </Row>
    </>
  )
}

export default ProfileUser