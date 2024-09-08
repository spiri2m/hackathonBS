import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from "./forumStyles";
import img1 from '../../Rectangle 24.png'
import avatar from '../../Abatars.png'
import libr from '../../Rectangle 24 (1).png';
import pfp1 from '../../Avatars (1).png'
import pfp from '../../Avatars.png'
const Forum = () => {
    const Topic = (props) => {
        return (
            <TouchableOpacity style={styles.topicWrapper}>
                <Image source={props.img} style={{width: 75, height: 75}}/>
                <View style={styles.topicDescWrapper}>
                    <View style={styles.karim}>
                        <Text style={{color: '#fff', fontFamily: 'OS-Bold', fontSize: 16, width: '70%', height: 50}}>
                            {props.text}
                        </Text>
                        <Image source={props.pfp} style={styles.img}/>
                    </View>
                    <View style={styles.statsWrapper}>
                        <Text style={styles.statsText}>{`${props.views} views`}</Text>
                        <Text style={styles.statsText}>{`${props.likes} likes`}</Text>
                        <Text style={styles.statsText}>{`${props.comments} comments`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const BookReview = (props) => {
        return (
            <View>
                <Text>
                    BookReview
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={avatar} style={{width: 40, height: 40}}/>
                <TextInput
                    placeholder="Интересное..."
                    placeholderTextColor='#fff'
                    style={styles.input}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitText}>
                        Публикация
                    </Text>
                </TouchableOpacity>
            </View>
            <Topic img={img1} text="Қай кітапты таңдаған дұрыс?" views={651234} likes={355} comments={123} pfp={pfp}/>
            <Topic img={libr} text="Кітапты қалай оқыған дұрыс?" views={57392} likes={1200} comments={201} pfp={pfp1}/>

            <View>
                <Text>

                </Text>
                <BookReview/>
            </View>
        </View>
    )
}
export default Forum