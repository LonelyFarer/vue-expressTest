var sqlMap = {
    user: {
        add: 'insert into user (username, password, password2, email, phone) values (?,?,?,?,?)',
        select_name: 'select * from user',
        update_user: 'update user set',
    },
    words: {
        add: 'insert into words (username, words, likes, nolike,time) values (?,?,?,?,?)',
        select_all: 'select * from words',
        update_words: 'update words set',
        likecount:'update words set likes=likes+1',
        nolikecount:'update words set nolike=nolike+1',
    },
   
}

module.exports = sqlMap;