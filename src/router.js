import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/App.vue'
import CooEnglish from '@/components/CooEnglish.vue'
import ADirIn from '@/components/ADirIn.vue'
import ARectoria from '@/components/ARectoria.vue'
import AVin from '@/components/AVin.vue'
import ASalA from '@/components/ASalA.vue'
import ASalB from '@/components/ASalB.vue'
import ASalId from '@/components/ASalId.vue'
import ASalJ from '@/components/ASalJ.vue'
import AAudi from '@/components/AAudi.vue'
import AAudA from '@/components/AAudA.vue'
import BDirNI from '@/components/BDirNI.vue'
import BLabC from '@/components/BLabC.vue'
import BAudB from '@/components/BAudB.vue'
import BDirB from '@/components/BDirB.vue'
import CCaf from '@/components/CCaf.vue'
import DCooI from '@/components/DCooI.vue'
import DDirInd from '@/components/DDirInd.vue'
import DLabQ from '@/components/DLabQ.vue'
import DLabMan from '@/components/DLabMan.vue'
import DLabHyN from '@/components/DLabHyN.vue'
import DLabS from '@/components/DLabS.vue'
import DLabMic from '@/components/DLabMic.vue'
import DLabFyM from '@/components/DLabFyM.vue'
import DLabEne from '@/components/DLabEne.vue'
import DLabEye from '@/components/DLabEye.vue'
import DLabCom from '@/components/DLabCom.vue'
import DLabRob from '@/components/DLabRob.vue'
import DAlmMat from '@/components/DAlmMat.vue'
import EConE from '@/components/EConE.vue'
import ESerM from '@/components/ESerM.vue'
import EFin from '@/components/EFin.vue'
import EInc from '@/components/EInc.vue'
import FSal from '@/components/FSal.vue'
import GCan from '@/components/GCan.vue'
import HLab from '@/components/HLab.vue'
import ISal from '@/components/ISal.vue'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/coordinacion-i',
			name: 'CoordinacionI',
			component: CooEnglish
		},
		{
			path: '/dir-er',
			name: 'DireccionER',
			component: CooEnglish
		},
		{
			path: '/a-dir-in',
			name: 'DireccionInf',
			component: ADirIn
		},
		{
			path: '/a-rec',
			name: 'Rectoria',
			component: ARectoria
		},
		{
			path: '/a-vin',
			name: 'Vinculacion',
			component: AVin
		},
		{
			path: '/a-sal-a',
			name: 'SalaA',
			component: ASalA
		},
		{
			path: '/a-sal-b',
			name: 'SalaB',
			component: ASalB
		},
		{
			path: '/a-sal-id',
			name: 'SalaId',
			component: ASalId
		},
		{
			path: '/a-sal-j',
			name: 'SalaA',
			component: ASalJ
		},
		{
			path: '/a-audi',
			name: 'SalaB',
			component: AAudi
		},
		{
			path: '/a-aud-a',
			name: 'SalaId',
			component: AAudA
		},
		{
			path: '/b-aud-b',
			name: 'AudB',
			component: BAudB
		},
		{
			path: '/b-dir-ni',
			name: 'DirNeInt',
			component: BDirNI
		},
		{
			path: '/b-dir-b',
			name: 'DirBio',
			component: BDirB
		},
		{
			path: '/b-lab-c',
			name: 'LabC',
			component: BLabC
		},
		{
			path: '/c-caf',
			name: 'Cafeteria',
			component: CCaf
		},
		{
			path: '/d-coo-i',
			name: 'CoordinacionIngles',
			component: DCooI
		},
		{
			path: '/d-dir-ind',
			name: 'DiInd',
			component: DDirInd
		},
		{
			path: '/d-lab-q',
			name: 'LabQ',
			component: DLabQ
		},
		{
			path: '/d-lab-man',
			name: 'LabMan',
			component: DLabMan
		},
		{
			path: '/d-lab-hyn',
			name: 'LabHyN',
			component: DLabHyN
		},
		{
			path: '/d-lab-s',
			name: 'LabS',
			component: DLabS
		},
		{
			path: '/d-lab-mic',
			name: 'LabMic',
			component: DLabMic
		},
		{
			path: '/d-lab-fym',
			name: 'LabFyM',
			component: DLabFyM
		},
		{
			path: '/d-lab-ene',
			name: 'LabEne',
			component: DLabEne
		},
		,
		{
			path: '/d-lab-com',
			name: 'LabCom',
			component: DLabCom
		},
		,
		{
			path: '/d-lab-rob',
			name: 'LabRob',
			component: DLabRob
		},
		{
			path: '/d-lab-eye',
			name: 'LabEye',
			component: DLabEye
		},
		{
			path: '/d-alm-mat',
			name: 'AlmacenMat',
			component: DAlmMat
		},
		{
			path: '/e-inc',
			name: 'EInc',
			component: EInc
		},
		{
			path: '/e-fin',
			name: 'EFin',
			component: EFin
		},
		{
			path: '/e-ser',
			name: 'ESerM',
			component: ESerM
		},
		{
			path: '/e-con',
			name: 'ControlE',
			component: EConE
		},
		{
			path: '/f-sal',
			name: 'FSal',
			component: FSal
		},
		{
			path: '/g-can',
			name: 'GCan',
			component: GCan
		},
		{
			path: '/h-lab',
			name: 'Hlab',
			component: HLab
		},
		{
			path: '/i-sal',
			name: 'ISal',
			component: ISal
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: function () { 
				return import(/* webpackChunkName: "about" */ './views/About.vue')
			}
		}
	]
})
