import { NgModule } from '@angular/core';
import {Routes, RouterModule, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { HomeTwoComponent } from './components/home-two/home-two.component';


export const TitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): string =>   // offeringsService.getOne(route.paramMap.get('id') || '').pipe(
  //   map(({ title }: SomeDataInterface) => title),
  //   filter<string>((title: string) => !!title),
  //   map((title: string): string => `Kamil Konopka - Trainer | ${title}`)
  // );
  // route.title + '|' + route.fragment
  'The Kai Garden Company'

const routes: Routes = [
    {
        path: '',
        component: HomeTwoComponent,
        title: TitleResolver
    },
    {
        path: '**',
        component: HomeTwoComponent,
        title: 'XYZ!' // TitleResolver
    } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
