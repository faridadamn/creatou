/* Creatou Hub shared browser database */
(() => {
  const KEY = 'creatou_hub_v1';
  const today = () => new Date().toISOString().slice(0,10);
  const uid = (prefix='id') => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
  const seed = () => ({
    version: 1,
    settings: { dailyTarget: 4 },
    products: [
      {id:'prd_crm',name:'Aplikasi CRM Mobile',category:'Digital Product',price:150000,stock:null,minStock:null,lifecycleStage:'Live',status:'active'},
      {id:'prd_ebook',name:'Ebook Time Management',category:'Ebook',price:45000,stock:null,minStock:null,lifecycleStage:'Growth',status:'active'},
      {id:'prd_bundle',name:'Template Bundle Retail & UMKM',category:'Template',price:250000,stock:12,minStock:5,lifecycleStage:'Development',status:'active'}
    ],
    customers: [
      {id:'cus_sinar',name:'Toko Sinar Jaya',pic:'Pak Budi',phone:'',notes:''},
      {id:'cus_maju',name:'CV Maju Sejahtera',pic:'Bu Rani',phone:'',notes:''}
    ],
    deals: [
      {id:'deal_1',customerId:'cus_sinar',productId:'prd_crm',value:25000000,stage:'Proposal',status:'open'},
      {id:'deal_2',customerId:'cus_maju',productId:'prd_bundle',value:40000000,stage:'Negosiasi',status:'open'}
    ],
    activities: [
      {id:'act_1',module:'crm',relatedCustomerId:'cus_sinar',relatedProductId:'prd_crm',title:'Follow-up penawaran CRM',type:'followup',date:today(),time:'09:00',nextDate:today(),status:'plan',priority:'urgent',note:'Validasi kebutuhan dan jadwal keputusan.'},
      {id:'act_2',module:'lifecycle',relatedProductId:'prd_bundle',title:'Testing checkout dan halaman produk',type:'testing',date:today(),time:'13:30',nextDate:today(),status:'plan',priority:'high',note:'Catat bug sebelum launch.'},
      {id:'act_3',module:'inventory',relatedProductId:'prd_bundle',title:'Opname stok bundle cetak',type:'opname',date:today(),time:'16:00',nextDate:today(),status:'plan',priority:'normal',note:'Cocokkan stok fisik dengan catatan.'}
    ],
    stockMovements: []
  });
  function load(){
    try { return JSON.parse(localStorage.getItem(KEY)) || seed(); }
    catch(e){ return seed(); }
  }
  function save(data){ localStorage.setItem(KEY, JSON.stringify(data)); window.dispatchEvent(new CustomEvent('creatou:changed')); return data; }
  function update(mutator){ const data=load(); mutator(data); return save(data); }
  function product(id){ return load().products.find(x=>x.id===id); }
  function customer(id){ return load().customers.find(x=>x.id===id); }
  function money(n){ return 'Rp '+Number(n||0).toLocaleString('id-ID'); }
  function isOverdue(a){ return !['done','cancel'].includes(a.status) && a.nextDate && a.nextDate < today(); }
  function ensure(){ if(!localStorage.getItem(KEY)) save(seed()); return load(); }
  window.CreatouDB = {KEY,seed,load,save,update,uid,today,product,customer,money,isOverdue,ensure};
})();