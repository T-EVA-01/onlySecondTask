import styled from 'styled-components';
import { IPost } from '../../../interfaces/interfaces';
import Image from 'next/image';
import PostContentContainer from './PostContentContainer'

const Post = styled.div`
    display: flex;
    flex-direction: row;

    .text-content {

        div {
            margin-top: 10px;
        }

    }
`

interface PostProps {
    className?: string
    post: IPost
}

const Index = ({ className, post: {id, title, description, image, type}}: PostProps) => {

    return(
        <Post className={className}>
            {image 
                ?             
                    <PostContentContainer className={'media-content'}>
                        <Image src={image} width={'300px'} height={'300px'}/>
                    </PostContentContainer>

                :   <></>
            }
            <PostContentContainer className={"text-content"}>
                <>
                    <div>{"id:" + id}</div>
                    <div>{"Post type: " + type}</div>
                    <div>{title}</div>
                    <div>{description}</div>
                </>
            </PostContentContainer>
        </Post>
    )
}

export default Index