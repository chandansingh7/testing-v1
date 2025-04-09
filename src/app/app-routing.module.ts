import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {HeroChildComponent} from "./examples/component-ineraction/heros/hero-child.components";
import {HeroParentComponent} from "./examples/component-ineraction/heros/hero-parent.component";
import {NameParentComponent} from "./examples/component-ineraction/heros/name-parent.component";
import {VersionParentComponent} from "./examples/component-ineraction/heros/version-parent.component";
import {VersionChildComponent} from "./examples/component-ineraction/heros/version-child.component";
import {VoterComponent} from "./examples/component-ineraction/parent-to-child/voter.component";
import {VoteTakerComponent} from "./examples/component-ineraction/parent-to-child/votetaker.component";
import {
  CountdownLocalVarParentComponent
} from "./examples/component-ineraction/parent-to-child-local-varialbe/countdown-parent.component";
import {
  CountdownViewChildParentComponent
} from "./examples/component-ineraction/parent-calls-via-viewchild/countdown-parent.component";
import {
  MissionControlComponent
} from "./examples/component-ineraction/parent-to-child-via-service/missioncontrol.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo:"landing"},
  {path: 'landing', component: LandingComponent},
  {path: 'hero-child', component: HeroChildComponent},
  {path: 'hero-parent', component: HeroParentComponent},
  {path: 'name-parent', component: NameParentComponent},
  {path: 'version-child', component: VersionChildComponent},
  {path: 'Version-parent', component: VersionParentComponent},
  {path: 'vote-taker', component: VoteTakerComponent},
  {path: 'voter', component: VoterComponent},
  {path: 'voter', component: VoterComponent},
  {path: 'countdown-parent-lv', component: CountdownLocalVarParentComponent},
  {path: 'countdown-parent-vc', component: CountdownViewChildParentComponent},
  {path: 'mission-control', component: MissionControlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
