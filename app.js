Vue.component('counter',{
    data(){
        return{
            count: 0
        }
    },
    template: '<button @click="count++">{{count}}</button>'
});

var app = new Vue({
    el  :   '#app',
    data:{
        'message'       :'Hello World',
        'url_telkom'    :'https://smktelkom-mlg.sch.id',
        'nama'          :'',
        'stock'         :6,
        'kelas'         :['XIIR1','XIIR2','XIIR3','XIIR4','XIIR5','XIIR6','XIIR7'],
        'dataGuru'      :[
                            {'nama':'Arya','kelas':'XRPL1'},
                            {'nama':'Bella','kelas':'XRPL2'},
                            {'nama':'Cintya','kelas':'XRPL1'},
                            {'nama':'Doni','kelas':'XRPL2'},
                            {'nama':'Elma','kelas':'XRPL1'},
                            {'nama':'Farhan','kelas':'XRPL2'},
                        ],
        'guru'          :'',
        'kelass'        :'',
        'count'         :0
    },
    methods:{
        greet(name){
            return "Good Morning, " + name;
        },
        pesan(){
            alert("Selamat belajar Vue JS")
        },
        simpan(){
            var temp        = new Object();
            temp['nama']    = this.guru;
            temp['kelas']   = this.kelass;
            this.dataGuru.push(temp);
            this.guru="";
            this.kelass="";
        }
    }
});